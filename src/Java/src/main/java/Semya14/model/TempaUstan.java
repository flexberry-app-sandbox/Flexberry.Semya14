package Semya14.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Semya14.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ТемпаУстан
 */
@Entity(name = "IISSemya14ТемпаУстан")
@Table(schema = "public", name = "ТемпаУстан")
public class TempaUstan {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Температура")
    private Double температура;

    @Column(name = "Дата")
    private Date дата;


    public TempaUstan() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getТемпература() {
      return температура;
    }

    public void setТемпература(Double температура) {
      this.температура = температура;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}