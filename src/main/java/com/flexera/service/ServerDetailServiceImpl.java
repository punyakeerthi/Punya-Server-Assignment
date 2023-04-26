package com.flexera.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flexera.entity.ServerDetail;
import com.flexera.repos.ServerDetailRepository;

@Service
public class ServerDetailServiceImpl implements ServerDetailService {

	@Autowired
	ServerDetailRepository serverDetailRepository;

	@Override
	public List<ServerDetail> getAllServerDetails() {
		return serverDetailRepository.findAll();
	}

	@Override
	public Optional<ServerDetail> getServerDetailById(Integer id) {
		return serverDetailRepository.findById(id);
	}

	@Override
	public List<ServerDetail> getServerDetailByName(String serverName) {
		return serverDetailRepository.getServerDetailsByName(serverName);
	}

	@Override
	public ServerDetail saveServerDetails(Map<String, Object> payload) {

		ServerDetail serverDetail = new ServerDetail();
		serverDetail.setId(Integer.parseInt(String.valueOf(payload.get("id"))));
		serverDetail.setName(String.valueOf(payload.get("name")));
		serverDetail.setLanguage(String.valueOf(payload.get("language")));
		serverDetail.setFramework(String.valueOf(payload.get("framework")));
		return serverDetailRepository.save(serverDetail);
	}

	@Override
	public void deleteServerDetailById(Integer id) {

		serverDetailRepository.deleteById(id);
	}

}
