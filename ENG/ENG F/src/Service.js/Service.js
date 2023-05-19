import axios from "axios";

const url = "http://localhost:8080/admin";

const Service = {
  //Sequences
  getSequencebytype: async (id) => {
    const response = await axios.get(`${url}/sequencenysequencetype/${id}`);
    return response;
  },
  getSequencekeyid: async (id) => {
    const response = await axios.get(`${url}/sequencebyid/${id}`);
    return response;
  },
  postSequence: async (data) => {
    const response = await axios.post(url + "/addsequence", data);
    return response;
  },
  postSequenceonly: async (data) => {
    const response = await axios.post(url + "/addSequenceonly", data);
    return response;
  },
  putSequencebyid: async (data) => {
    const response = await axios.put(url + "/modifysequence", data);
    return response;
  },

  //Sequence Types
  getType: async () => {
    const response = await axios.get(url + "/sequenceType");
    return response;
  },
  getSequenceTypeid: async (id) => {
    const response = await axios.get(`${url}/sequencetypebyid/${id}`);
    return response;
  },
  ///getSequenceandcharacterset
  getSequenceandcharacterset: async (id1, id2) => {
    const response = await axios.get(`${url}/allstr/${id1}/${id2}`);
    return response;
  },
};

export default Service;
