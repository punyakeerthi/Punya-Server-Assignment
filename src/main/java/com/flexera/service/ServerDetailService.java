package com.flexera.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.flexera.entity.ServerDetail;

public interface ServerDetailService {
	public List<ServerDetail> getAllServerDetails();
	public Optional<ServerDetail> getServerDetailById(Integer id);
	public List<ServerDetail> getServerDetailByName(String serverName);
	public ServerDetail saveServerDetails(Map<String, Object> payload);
	
	public void deleteServerDetailById(Integer id);
	 
}
