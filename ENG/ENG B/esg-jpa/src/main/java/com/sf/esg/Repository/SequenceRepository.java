package com.sf.esg.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sf.esg.Bean.Sequence;



public interface SequenceRepository extends JpaRepository<Sequence, Integer> {
	
	 List<Sequence> findBySequencetype(String charset);
	    
	    @Query("FROM Sequence WHERE sequencetype =:sequencetype and charset = :charset AND (endno >= :startno OR startno <= :endno)")
	    List<Sequence> findBySequencetypeAndRangeOverlap(
	    		 @Param("sequencetype") String sequencetype,
	        @Param("charset") String charset,
	        @Param("startno") int startno,
	        @Param("endno") int endno
	    );
//	 @Query("FROM Sequence WHERE charset = :charset AND (endno >= :startno OR startno <= :endno)")
//	 List<Sequence> findBySequencetypeAndRangeOverlap(
//	     @Param("charset") String charset,
//	     @Param("startno") int startno,
//	     @Param("endno") int endno
//	 );
	 
	
      @Query("SELECT g  FROM Sequence g  WHERE g.sequencetype=:sequencetype and g.charset =:charset")
	  public List<Sequence> vies(@Param (value="sequencetype") String SequenceType ,@Param (value="charset") String charset);
      
      
      @Query("FROM Sequence WHERE sequencetype = :sequencetype AND charset = :charset")
      List<Sequence> findBySequencetypeAndCharset(
          @Param("sequencetype") String sequencetype,
          @Param("charset") String charset
      );
      
     
      
}
