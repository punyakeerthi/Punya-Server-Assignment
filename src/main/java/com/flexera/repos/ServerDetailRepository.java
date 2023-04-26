package com.flexera.repos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.flexera.entity.ServerDetail; 

@Repository
public interface  ServerDetailRepository extends JpaRepository<ServerDetail, Integer>  {
	
	
	
	@Query(value="select sd from ServerDetail sd where sd.name like %:serverName%")
	  public List<ServerDetail> getServerDetailsByName(String serverName);
	  
	
		/*
		 * @Transactional
		 * 
		 * @Modifying
		 * 
		 * @Query("delete from RecoverFlexeraMapping") public void deleteAllRows();
		 * 
		 * @Query(
		 * value="select s.arl_id, f.* from flexera_mapping f, (select distinct * from cdb_archive.recover_flexera_mapping) s where f.is_live = 1 and f.prod_rid = nvl(s.cat_sw_product_id, -1) and f.rels_rid = nvl(s.cat_sw_release_id, -1) and f.delete_flag = 1 and flexeradata_rid in (select \"_rid\" from flexera_data where is_live = 1 and flexeraid = s.arl_id)"
		 * ,nativeQuery = true) public List<Object[]> getFlexeraMappingRows();
		 * 
		 * 
		 * @Query(
		 * value="select s.arl_id, f.* from flexera_mapping f,(select distinct * from cdb_archive.recover_flexera_mapping) s where f.is_live = 1 "
		 * +
		 * "and f.prod_rid = nvl(s.cat_sw_product_id, -1) and f.rels_rid = nvl(s.cat_sw_release_id, -1) and flexeradata_rid in "
		 * +
		 * "(select \"_rid\" from flexera_data where is_live = 1 and flexeraid = s.arl_id)"
		 * ,nativeQuery = true) public List<Object[]> getFlexeraRecoveredMappingRows();
		 * 
		 * 
		 * @Transactional
		 * 
		 * @Modifying
		 * 
		 * @Query(value="begin\r\n" + "for v_rec in (select s.arl_id, f.*\r\n" +
		 * "from flexera_mapping f,\r\n" + "(select distinct *\r\n" +
		 * "from cdb_archive.recover_flexera_mapping) s\r\n" + "where f.is_live = 1\r\n"
		 * + "and f.prod_rid = nvl(s.cat_sw_product_id, -1)\r\n" +
		 * "and f.rels_rid = nvl(s.cat_sw_release_id, -1)\r\n" +
		 * "and f.delete_flag = 1\r\n" + "and flexeradata_rid in\r\n" +
		 * "(select \"_rid\"\r\n" + "from flexera_data\r\n" + "where is_live = 1\r\n" +
		 * "and flexeraid = s.arl_id)) loop\r\n" + "update FLEXERA_MAPPING\r\n" +
		 * "set is_live = 0, \"_enddate\" = sysdate\r\n" +
		 * "where \"_rid\" = v_rec.\"_rid\"\r\n" +
		 * "and \"_inst\" = v_rec.\"_inst\";\r\n" + "insert into FLEXERA_MAPPING\r\n" +
		 * "select \"_rid\",\r\n" + "dataobj_inst.nextval \"_inst\",\r\n" +
		 * "sysdate \"_createdate\",\r\n" + "null,\r\n" + "1,\r\n" +
		 * "'Recover' \"_src\",\r\n" +
		 * "'DELETE_FLAG|DELETE_FLAG_DATE|DELETE_FLAG_DATE_OLD|DELETE_REASON' \"_srccols\",\r\n"
		 * + "flexeradata_rid,\r\n" + "orgs_rid,\r\n" + "prod_rid,\r\n" +
		 * "versions_rid,\r\n" + "editions_rid,\r\n" + "rels_rid,\r\n" + "ismajor,\r\n"
		 * + "notes,\r\n" + "null delete_flag,\r\n" + "null delete_flag_date,\r\n" +
		 * "null delete_flag_date_old,\r\n" + "null delete_reason,\r\n" +
		 * "replace_rid,\r\n" + "unmap_flag,\r\n" + "source\r\n" +
		 * "from FLEXERA_MAPPING\r\n" + "where \"_rid\" = v_rec.\"_rid\"\r\n" +
		 * "and \"_inst\" = v_rec.\"_inst\";\r\n" + "end loop;\r\n" + "end;",nativeQuery
		 * = true) public void recoverRows() ;
		 */
	
}
