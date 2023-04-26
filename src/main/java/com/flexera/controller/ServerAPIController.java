package com.flexera.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.flexera.entity.ServerDetail;
import com.flexera.service.ServerDetailService;
import com.flexera.service.UserService;

@RestController
public class ServerAPIController {

	@Autowired
	ServerDetailService serverDetailService;

	@Autowired
	UserService userService;
	
	

	@GetMapping(value = { "/", "/loadFirstPage" })
	public ModelAndView loadFirstPage(ModelAndView modelAndView,Model model) {
	 	modelAndView.setViewName("firstpage");
		return modelAndView;

	}
	
	
	@GetMapping(value = {"/loadServerDetailsPage" })
	public ModelAndView loadServerDetailsPage(ModelAndView modelAndView,Model model) {
	 	modelAndView.setViewName("serverdetails");
		return modelAndView;

	}
	
	@GetMapping(value = {"/showServerDetails" })
	public ModelAndView showServerDetails(ModelAndView modelAndView,Model model) {
		List<ServerDetail> lServerDetail=serverDetailService.getAllServerDetails();
		modelAndView.addObject("lServerDetail",lServerDetail);
	 	modelAndView.setViewName("showserverdetails");
		return modelAndView;

	}

	@GetMapping(value = { "/getServerDetails/{id}", "/getServerDetails" })
	public ResponseEntity<Object> getServerDetails(@PathVariable(required = false) Integer id) {
		Map<String, Object> responseMap = new HashMap<>();
		List<ServerDetail> lServerDetails = new ArrayList<>();
		System.out.println("id: " + id);

		if (id == null) {
			lServerDetails.addAll(serverDetailService.getAllServerDetails());
			responseMap.put("lServerDetails", lServerDetails);

		} else {
			Optional<ServerDetail> serverDetail = serverDetailService.getServerDetailById(id);
			System.out.println("serverDetail.isPresent(): " + serverDetail.isPresent());
			if (serverDetail.isPresent()) {

				lServerDetails.add(serverDetail.get());
				responseMap.put("lServerDetails", lServerDetails);
			} else {
				return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
			}
		}

		return new ResponseEntity<Object>(responseMap, new HttpHeaders(), HttpStatus.OK);

	}

	@GetMapping(value = { "/getServerByName/{serverName}" })
	public ResponseEntity<Object> getServerByName(@PathVariable(required = false) String serverName) {
		Map<String, Object> responseMap = new HashMap<>();
		List<ServerDetail> lServerDetails = serverDetailService.getServerDetailByName(serverName);
		if (lServerDetails.size() > 0) {
			responseMap.put("lServerDetails", lServerDetails);

			return new ResponseEntity<Object>(responseMap, new HttpHeaders(), HttpStatus.OK);
		} else {
			return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);

		}

	}

	@PutMapping("/putServerDetails")
	public ResponseEntity<Object> putServerDetails(@RequestBody Map<String, Object> serverDetailPayLoad,
			HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> responseMap = new HashMap<>();
		ServerDetail serverDetail = serverDetailService.saveServerDetails(serverDetailPayLoad);

		responseMap.put("serverDetail", serverDetail);
		return new ResponseEntity<Object>(responseMap, new HttpHeaders(), HttpStatus.OK);

	}

	@DeleteMapping(value = { "/deleteServerDetails/{id}" })
	public ResponseEntity<Object> deleteServerDetails(@PathVariable(required = true) Integer id) {
		Map<String, Object> responseMap = new HashMap<>();
		System.out.println("id: " + id);

		if (id == null) {
			return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);

		} else {
			Optional<ServerDetail> serverDetails = serverDetailService.getServerDetailById(id);
			if (serverDetails.isPresent()) {
				serverDetailService.deleteServerDetailById(id);
				return new ResponseEntity<Object>(responseMap, new HttpHeaders(), HttpStatus.OK);
			} else {
				return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
			}
		}

	}

}
