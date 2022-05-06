package com.example.demo.service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.demo.model.Customer;
import com.example.demo.model.profile;
import com.example.demo.repository.Customer_repository;


@Service
public class LoanApplicantAdminService {
	
	@Autowired
	public Customer_repository adminRepo;

	//private Customer adminmodel=new Customer();
	
	//for loan details data
	public List<Customer> approvedLoan()
	{
		System.out.println("Inside find All service");
		return (List<Customer>)adminRepo.findAll();
	}	
	
	//for get by Id data
	public Customer getById(int id)
	{
		System.out.println("it is in getBYID");
		return adminRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("check the id:"+id));
		
	}

	
	//for deleting the loan 
	public void deleteloan(Customer am)
	{
		adminRepo.delete(am);
	}
	
	//for editing status as Approved
	public ResponseEntity<Customer>  editstatusA(int id,Customer userObj)
	{
		Customer userobj=adminRepo.getById(id);
		userobj.setStatus("Approved");
		Customer user=adminRepo.save(userobj);
		return ResponseEntity.ok(user);
	}
	//for editing status as Rejected
	public ResponseEntity<Customer>  editstatusR(int id,Customer userObj)
	{
		Customer userobj=adminRepo.getById(id);
		userobj.setStatus("Rejected");
		Customer user=adminRepo.save(userobj);
		return ResponseEntity.ok(user);
	}
	//for editing the LOAN 
	public ResponseEntity<Customer> editLoan(int id,Customer repaymentUser)
	{
		Customer repaymentuser=adminRepo.getById(id);
		repaymentuser.setName(repaymentUser.getName());
		repaymentuser.setAdhaar_no(repaymentUser.getAdhaar_no());
		repaymentuser.setAddress(repaymentUser.getAddress());
		repaymentuser.setEmailid(repaymentUser.getEmailid());
		repaymentuser.setPan_no(repaymentUser.getPan_no());
		repaymentuser.setMobile_no(repaymentUser.getMobile_no());
		repaymentuser.setSalary(repaymentUser.getSalary());
		repaymentuser.setLoan_amount_required(repaymentUser.getLoan_amount_required());
		repaymentuser.setLoan_repayment_months(repaymentUser.getLoan_repayment_months());
		Customer user=adminRepo.save(repaymentuser);
		return ResponseEntity.ok(user);
	}
	//for editing the repayment schedule
	public ResponseEntity<Customer> editRepaymentSchedule(int id,Customer repaymentUser)
	{
		Customer repaymentuser=adminRepo.getById(id);
		repaymentuser.setLoan_amount_required(repaymentUser.getLoan_amount_required());
		repaymentuser.setLoan_repayment_months(repaymentUser.getLoan_repayment_months());
		Customer user=adminRepo.save(repaymentuser);
		return ResponseEntity.ok(user);
	}
	
	//for delete the repayment Schedule
	public ResponseEntity<Customer> deleteRepaymentSchedule(int id,Customer repaymentUser)
	{
		Customer repaymentuser=adminRepo.getById(id);
		int a=0;
		repaymentuser.setEmi(a);
		Customer user=adminRepo.save(repaymentuser);
		return ResponseEntity.ok(user);
	}
	
	public int getLoanID(Customer am)
	{
		return am.getLoan_id();
	}
	
	//for calculating the EMI
	public int calculateEmi(Customer am)
	{
		int x=am.getLoan_amount_required();
		int y=am.getLoan_repayment_months();
		System.out.println(am.getLoan_repayment_months());
		int z=(x/y);
		am.setEmi(z);
		adminRepo.save(am);
		return z;
	}

}


