package com.flexera.entity;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SERVER_DETAILS")
public class ServerDetail {

	@Id
	private Integer id;

	@Column(name = "name")
	String name;

	@Column(name = "language")
	String language;

	@Column(name = "framework")
	String framework;

	public ServerDetail() {
	}

	public ServerDetail(Integer id, String name, String language, String framework) {
		super();
		this.id = id;
		this.name = name;
		this.language = language;
		this.framework = framework;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getFramework() {
		return framework;
	}

	public void setFramework(String framework) {
		this.framework = framework;
	}

	@Override
	public int hashCode() {
		return Objects.hash(framework, id, language, name);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ServerDetail other = (ServerDetail) obj;
		return Objects.equals(framework, other.framework) && Objects.equals(id, other.id)
				&& Objects.equals(language, other.language) && Objects.equals(name, other.name);
	}

	@Override
	public String toString() {
		return "ServerDetail [id=" + id + ", name=" + name + ", language=" + language + ", framework=" + framework
				+ "]";
	}

}
