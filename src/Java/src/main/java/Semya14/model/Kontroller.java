package Semya14.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Semya14.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Контроллер
 */
@Entity(name = "IISSemya14Контроллер")
@Table(schema = "public", name = "Контроллер")
public class Kontroller {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Состояние")
    private Boolean состояние;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TempaUstan")
    @Convert("TempaUstan")
    @Column(name = "ТемпаУстан", length = 16, unique = true, nullable = false)
    private UUID _tempaustanid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TempaUstan", insertable = false, updatable = false)
    private TempaUstan tempaustan;

    @OneToMany(mappedBy = "kontroller", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Datchik> datchiks;


    public Kontroller() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Boolean getСостояние() {
      return состояние;
    }

    public void setСостояние(Boolean состояние) {
      this.состояние = состояние;
    }


}