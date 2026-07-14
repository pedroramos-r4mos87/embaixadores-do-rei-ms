import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Download,
  FileArchive,
  FileText,
  FolderOpen,
  LockKeyhole,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  materialCategories,
  materials,
} from "../../data/materials";
import "./Materiais.css";

function getFileIcon(fileType) {
  if (fileType === "ZIP") {
    return FileArchive;
  }

  return FileText;
}

export default function Materiais() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredMaterial = materials.find(
    (material) => material.featured,
  );

  const filteredMaterials = useMemo(() => {
    const normalizedSearch = searchTerm
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

    return materials.filter((material) => {
      const matchesCategory =
        activeCategory === "Todos" ||
        material.category === activeCategory;

      const searchableText =
        `${material.title} ${material.description} ${material.category}`
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

      return (
        matchesCategory &&
        searchableText.includes(normalizedSearch)
      );
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="materialsPage">
      <section className="materialsHero">
        <div className="materialsContainer materialsHero__content">
          <span className="materialsEyebrow">
            <FolderOpen size={18} />
            Biblioteca de recursos
          </span>

          <h1>Materiais para fortalecer sua embaixada</h1>

          <p>
            Acesse estudos, manuais, formulários e recursos preparados para
            apoiar embaixadores, conselheiros e lideranças.
          </p>
        </div>
      </section>

      {featuredMaterial && (
        <section className="materialsFeatured">
          <div className="materialsContainer">
            <article className="materialsFeatured__card">
              <div className="materialsFeatured__visual">
                <BookOpen size={64} />

                <span>Material em destaque</span>
              </div>

              <div className="materialsFeatured__content">
                <span className="materialsTag">
                  {featuredMaterial.category}
                </span>

                <h2>{featuredMaterial.title}</h2>

                <p>{featuredMaterial.description}</p>

                <div className="materialsFeatured__meta">
                  <span>{featuredMaterial.fileType}</span>
                  <span>{featuredMaterial.fileSize}</span>
                  <span>Atualizado em {featuredMaterial.updatedAt}</span>
                </div>

                <a
                  href={featuredMaterial.downloadUrl}
                  className="materialsPrimaryButton"
                  download
                >
                  <Download size={18} />
                  Baixar material
                </a>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="materialsContent">
        <div className="materialsContainer">
          <div className="materialsHeader">
            <div>
              <span className="materialsSectionTag">
                Recursos disponíveis
              </span>

              <h2>Encontre o material que precisa</h2>
            </div>

            <label className="materialsSearch">
              <Search size={19} />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Pesquisar material"
                aria-label="Pesquisar materiais"
              />
            </label>
          </div>

          <div className="materialsFilters">
            {materialCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "materialsFilter materialsFilter--active"
                    : "materialsFilter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredMaterials.length > 0 ? (
            <div className="materialsGrid">
              {filteredMaterials.map((material) => {
                const FileIcon = getFileIcon(material.fileType);

                return (
                  <article
                    key={material.id}
                    className={
                      material.restricted
                        ? "materialCard materialCard--restricted"
                        : "materialCard"
                    }
                  >
                    <div className="materialCard__top">
                      <div className="materialCard__icon">
                        <FileIcon size={28} />
                      </div>

                      <span>{material.fileType}</span>
                    </div>

                    <span className="materialCard__category">
                      {material.category}
                    </span>

                    <h3>{material.title}</h3>
                    <p>{material.description}</p>

                    <div className="materialCard__meta">
                      <span>{material.fileSize}</span>
                      <span>{material.updatedAt}</span>
                    </div>

                    {material.restricted ? (
                      <Link
                        to="/login"
                        className="materialCard__restrictedLink"
                      >
                        <LockKeyhole size={17} />
                        Acesso para conselheiros
                      </Link>
                    ) : (
                      <a
                        href={material.downloadUrl}
                        className="materialCard__download"
                        download
                      >
                        <Download size={17} />
                        Baixar arquivo
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="materialsEmpty">
              <Search size={40} />
              <h3>Nenhum material encontrado</h3>
              <p>
                Tente alterar a categoria ou pesquisar outro termo.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="materialsCounselor">
        <div className="materialsContainer materialsCounselor__card">
          <div className="materialsCounselor__icon">
            <ShieldCheck size={38} />
          </div>

          <div>
            <span className="materialsSectionTag materialsSectionTag--yellow">
              Área exclusiva
            </span>

            <h2>Materiais especiais para conselheiros</h2>

            <p>
              Alguns recursos serão disponibilizados apenas para conselheiros
              vinculados a uma embaixada ativa.
            </p>
          </div>

          <Link to="/login" className="materialsCounselor__link">
            Conhecer a área do conselheiro
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}