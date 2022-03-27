package com.examly.springapp.Model;

import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="images")
public class ImageModel {
	
	@Id
    @Column(name="imageId",unique=true)
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
    private String imageId;
	
	@Column(name="imageName")
    private String imageName;
	
	@Column(name="image")
    private Blob image;
	
	@Column(name="imageTag")
    private String imageTag;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="email") // NOT ABLE TO USE THE ATTRIBUTE USERNAME AS IT IS NOT A PRIMARY KEY
	private UserModel userId;


	@OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL) // ALL THE COMMENTS FROM COMMENT MODEL ARE STORED HERE
	private List<CommentModel> comments = new ArrayList<>();

	public ImageModel(String imageId, String imageName, Blob image, String imageTag) {
		super();
		this.imageId = imageId;
		this.imageName = imageName;
		this.image = image;
		this.imageTag = imageTag;
	}

	public ImageModel(String imageId, String imageName, String imageTag, UserModel userId) {
		super();
		this.imageId = imageId;
		this.imageName = imageName;
		this.imageTag = imageTag;
		this.userId = userId;
	}
	
	public ImageModel(String imageId, String imageName, String imageTag, UserModel userId, List<CommentModel> comments) {
		super();
		this.imageId = imageId;
		this.imageName = imageName;
		this.imageTag = imageTag;
		this.userId = userId;
		this.comments=comments;
	}
	
	public ImageModel(String imageId) {
		super();
		this.imageId = imageId;
	}

	public ImageModel() {

	}

	public ImageModel(String imageName, Blob image, String imageTag, UserModel userId) {
		super();
		this.imageName = imageName;
		this.image = image;
		this.imageTag=imageTag;
		this.userId = userId;
	}

	public String getImageId() {
		return imageId;
	}

	public void setImageId(String imageId) {
		this.imageId = imageId;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public String getImageTag() {
		return imageTag;
	}

	public void setImageTag(String imageTag) {
		this.imageTag = imageTag;
	}

	public Blob getImage() {
		return image;
	}

	public void setImage(Blob image) {
		this.image = image;
	}
	
	
	public UserModel getUserId() {
		return userId;
	}

	public void setUserId(UserModel userId) {
		this.userId = userId;
	}

	public List<CommentModel> getComments() {
		return comments;
	}

	public void setComments(CommentModel comment) {
		this.comments.add(comment);
	}
	
	
}
