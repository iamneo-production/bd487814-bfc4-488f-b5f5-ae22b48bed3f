package com.examly.springapp.Security;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {				
		http.cors().and().csrf().disable()
		.authorizeRequests()
		.antMatchers("/signup", "/login").permitAll()
		.antMatchers("/users/**").hasAnyRole("USER", "ADMIN")
		.antMatchers("/admin/**").permitAll()
		//.antMatchers("/admin/**").hasAuthority("ADMIN")
		.anyRequest().authenticated()
		.and().sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		//http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
	}
	
}
