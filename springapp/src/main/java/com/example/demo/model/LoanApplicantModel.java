package com.example.demo.model;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="admin_data")
public class LoanApplicantModel {
	
	@Column(name="EMI_Amount")
	private Integer emi=0;
	
	@Id
	@Column(name="ApplicantLoanID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer applicantLoanId;
	
	@Column(name="Status")
	private String status;
	
	public LoanApplicantModel()
	{	
	}
	
	public LoanApplicantModel(Integer applicantLoanId,String status,Integer emi) {
		super();
		this.applicantLoanId = applicantLoanId;
		this.status=status;
		this.emi=emi;
	}

	public Integer getEmi() {
		return emi;
	}

	public void setEmi(Integer emi) {
		this.emi = emi;
	}
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getApplicantLoanId() {
		return applicantLoanId;
	}
	public void setApplicantLoanId(Integer applicantLoanId) {
		this.applicantLoanId = applicantLoanId;
	}
}
