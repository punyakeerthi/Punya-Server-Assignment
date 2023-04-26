package com.flexera.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.flexera.entity.User;
import com.flexera.service.UserService;

@Controller
public class LoginController {

	@Autowired
	UserService userService;


	


	/*
	 * @GetMapping(value = { "/", "/loginController" }) public ModelAndView
	 * getLoginPage(ModelAndView modelAndView,Model model) {
	 * model.asMap().get("message");
	 * modelAndView.addObject("message",model.asMap().get("message"));
	 * modelAndView.addObject("errorMsg",model.asMap().get("errorMsg"));
	 * modelAndView.setViewName("login"); return modelAndView;
	 * 
	 * }
	 */

	@PostMapping(value = { "/validateLogin" })
	public ModelAndView validateLogin(@RequestParam("userId") String userId, @RequestParam("password") String password,
			ModelAndView modelAndView,HttpServletRequest request,RedirectAttributes redirectAttributes) {
		Optional<User> userDetail = userService.findByUserId(userId);
		if (userDetail.isPresent() && userDetail.get().getPassword().equals(password)) {
			
			putSession(request, userDetail);
			modelAndView.setViewName("redirect:/loginSuccess");
			return modelAndView;
		} else {
			redirectAttributes.addFlashAttribute("errorMsg","Login failure !" );
			modelAndView.setViewName("redirect:/");
			return modelAndView;
		}

	}
	
	static void putSession(HttpServletRequest request,Optional<User> userDetail)
	{
		HttpSession httpSession=request.getSession();
		httpSession.setAttribute("userName",userDetail.get().getName());
	}

	@GetMapping(value = { "/loginSuccess" })
	public ModelAndView getLoginSuccess(ModelAndView modelAndView) {
		modelAndView.setViewName("redirect:/viewCronJobDetails");
		return modelAndView;

	}
	
	
 
	
	@GetMapping(value = { "/logout"} )
	public ModelAndView getLogOut(ModelAndView modelAndView,HttpServletRequest request,RedirectAttributes redirectAttributes) {
		HttpSession httpSession=request.getSession();
		 httpSession.invalidate();
		redirectAttributes.addFlashAttribute("message","Logout successfully!" );
		modelAndView.setViewName("redirect:/");
		return modelAndView;

	}

 
}
