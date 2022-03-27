package com.examly.springapp.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="comments")
public class CommentModel {
	@Id
    @Column(name="commentId")
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
    private String commentId;
	
	@Column(name="comment")
    private String comment;
	
	@OneToOne(fetch = FetchType.LAZY) // REFERENCES TO THE USERMODEL
	@JoinColumn(name="email") // NOT ABLE TO USE THE ATTRIBUTE USERNAME AS IT IS NOT A PRIMARY KEY
	private UserModel userId;
	
	public CommentModel() {
		super();
	}
	
	public CommentModel(String comment) {
		super();
		this.comment = comment;
	}

	public CommentModel(String comment, UserModel userId) {
		super();
		this.comment = comment;
		this.userId = userId;
	}
	
	public String getCommentId() {
		return commentId;
	}

	public void setCommentId(String commentId) {
		this.commentId = commentId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public UserModel getUserId() {
		return userId;
	}

	public void setUserId(UserModel userId) {
		this.userId = userId;
	}
}
