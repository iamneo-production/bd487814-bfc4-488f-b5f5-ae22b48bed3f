package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.Model.ImageModel;

@Repository
public interface ImageRepository extends JpaRepository<ImageModel,String> {
	@Query("SELECT u FROM ImageModel u where u.imageId=?1")
	public ImageModel findByImageId(String id);

}
