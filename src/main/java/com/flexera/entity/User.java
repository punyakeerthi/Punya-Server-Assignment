package com.flexera.entity;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema="cdb_archive",name= "CRONJOB_MONITOR_USERS")
public class User {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer rid;

	@Column(name = "NAME")
	String name;
	
	@Column(name = "USERID")
	String userId;
	
	@Column(name = "PASSWORD")
	String password;
	
	@Column(name = "EMAILID")
	String emailId;
	
	@Column(name = "IS_LIVE")
	Integer isLive;

	@Column(name = "USER_TYPE")
	Integer userType;
	
	public User() { 
	}

	public User(Integer rid, String name, String userId, String password, String emailId, Integer isLive,
			Integer userType) {
		super();
		this.rid = rid;
		this.name = name;
		this.userId = userId;
		this.password = password;
		this.emailId = emailId;
		this.isLive = isLive;
		this.userType = userType;
	}

	public Integer getRid() {
		return rid;
	}

	public void setRid(Integer rid) {
		this.rid = rid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Integer getIsLive() {
		return isLive;
	}

	public void setIsLive(Integer isLive) {
		this.isLive = isLive;
	}

	public Integer getUserType() {
		return userType;
	}

	public void setUserType(Integer userType) {
		this.userType = userType;
	}

	@Override
	public int hashCode() {
		return Objects.hash(emailId, isLive, name, password, rid, userId, userType);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(emailId, other.emailId) && Objects.equals(isLive, other.isLive)
				&& Objects.equals(name, other.name) && Objects.equals(password, other.password)
				&& Objects.equals(rid, other.rid) && Objects.equals(userId, other.userId)
				&& Objects.equals(userType, other.userType);
	}

	@Override
	public String toString() {
		return "User [rid=" + rid + ", name=" + name + ", userId=" + userId + ", password=" + password + ", emailId="
				+ emailId + ", isLive=" + isLive + ", userType=" + userType + "]";
	}
	
	
	
	
}
