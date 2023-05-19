package com.sf.esg.Service;



import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.sf.esg.Bean.Sequence;
import com.sf.esg.Repository.SequenceRepository;

import jakarta.transaction.Transactional;

@Service
public class SequenceService {
@Autowired
private SequenceRepository  seqrepo;

public List<Sequence> viewSequence()
{
	return seqrepo.findAll();
}

public Optional<Sequence> viewsequenceById(int sequencekeyid) {
	return seqrepo.findById(sequencekeyid);
}

public String modifySequence(Sequence sequence) {  
    try {
    	seqrepo.save(sequence);
        return "SUCCESS";
    } catch (Exception e) {
        e.printStackTrace();
        return "Error";
    }
   
}

public  List<Sequence>findBySequencetype(String sequencetype) {
	
	  try {
		  return seqrepo.findBySequencetype(sequencetype);
            
	  } catch (Exception e) {  
	        e.printStackTrace();
	        return null;
	    }
 
}

@Transactional
public String addSequence(Sequence sequence) {
    List<Sequence> existingSequences = seqrepo.findBySequencetypeAndRangeOverlap(
    		sequence.getSequencetype() , sequence.getCharset(), sequence.getStartno(), sequence.getEndno());

    if (!existingSequences.isEmpty()) {
        int maxEndNo = existingSequences.stream().mapToInt(Sequence::getEndno).max().orElse(Integer.MIN_VALUE);
        if (sequence.getStartno() <= maxEndNo) {
            return "SEQUENCE_ALREADY_EXISTS";
        }
    }

    seqrepo.save(sequence);
    return "SUCCESS";
}

public  List<Sequence> vies(String sequencetype ,String charset ) {
	
	  try {
		  return seqrepo.vies(sequencetype ,charset);
          
	  } catch (Exception e) {  
	        e.printStackTrace();
	        return null;
	    }

}


public String addSequenceonly(Sequence sequence) {
    String charset = sequence.getCharset();
    List<Sequence> existingSequences = seqrepo.findBySequencetypeAndCharset(sequence.getSequencetype(), charset);

    if (!existingSequences.isEmpty()) {
        // The charset already exists
        return "Sequence with charset " + charset + " already exists.";
    } else {
        seqrepo.save(sequence);
        return "SUCCESS";
    }
}


    



}
