package com.flexera.tags;

import java.io.IOException;
import java.time.LocalDateTime;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.SkipPageException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import org.springframework.scheduling.support.CronExpression;

public class CronExpressionEvaluater extends SimpleTagSupport {

	public static void main(String[] args) {
		String ex = "30 23 *  *  *  ?";
		//ex = ex.concat(" ?");
		CronExpression cronExpression = CronExpression.parse(ex);
		LocalDateTime nextRunDate = cronExpression.next(LocalDateTime.now());

		LocalDateTime dateTime = nextRunDate;

		System.out.println(toCron(String.valueOf(dateTime.getMinute()), String.valueOf(dateTime.getHour()),
				String.valueOf(dateTime.getDayOfMonth()), String.valueOf(dateTime.getMonth()),
				String.valueOf(dateTime.getDayOfWeek()), String.valueOf(dateTime.getYear())));

	}

	public static String evaluateExpression(String cronExpression) {
		try {
			System.out.println("aaaa: "+cronExpression);
			CronExpression parsedCronExpression = CronExpression.parse(cronExpression);
			LocalDateTime nextRunDate = parsedCronExpression.next(LocalDateTime.now());

			LocalDateTime dateTime = nextRunDate;

			String result = toCron(String.valueOf(dateTime.getMinute()), String.valueOf(dateTime.getHour()),
					String.valueOf(dateTime.getDayOfMonth()), String.valueOf(dateTime.getMonth()),
					String.valueOf(dateTime.getDayOfWeek()), String.valueOf(dateTime.getYear()));

			return result;
		} catch (Exception e) {
System.out.println(e.getMessage());
		}

		return "";
	}

	public static String toCron(final String mins, final String hrs, final String dayOfMonth, final String month,
			final String dayOfWeek, final String year) {
		String s = dayOfWeek + " " + dayOfMonth + " " + month + " " + year + " " + hrs + ":" + mins;
		return s;
		// return String.format("%s %s %s %s %s %s", mins, hrs, dayOfMonth, month,
		// dayOfWeek, year);

	}

	private String cronExpression;

	public void setCronExpression(String cronExpression) {
		 
		this.cronExpression = cronExpression+" ?";
	}

	@Override
	public void doTag() throws JspException, IOException {
		try {
			String parsedCronExpression = evaluateExpression(cronExpression);
			String cronPattern = (parsedCronExpression != null && !parsedCronExpression.isEmpty())
					? parsedCronExpression
					: "";
			getJspContext().getOut().write(cronPattern);
		} catch (Exception e) {
			e.printStackTrace();

			throw new SkipPageException("Exception in formatting " + cronExpression);
		}
	}
}
