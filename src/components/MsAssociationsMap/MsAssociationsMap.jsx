import { useMemo, useRef, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import {
  activeAssociations,
  findAssociationByCity,
} from "../../data/associationRegions";
import msMunicipalities from "../../assets/maps/ms-municipios.json";
import "./MsAssociationsMap.css";

function getCityName(properties = {}) {
  return (
    properties.NM_MUN ||
    properties.name ||
    properties.nome ||
    properties.NOME ||
    properties.municipio ||
    properties.MUNICIPIO ||
    ""
  );
}

export default function MsAssociationsMap() {
  const wrapperRef = useRef(null);

  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const mapData = useMemo(() => {
    const projection = geoMercator().fitSize(
      [520, 520],
      msMunicipalities,
    );

    const createPath = geoPath(projection);

    return msMunicipalities.features.map((feature, index) => {
      const cityName = getCityName(feature.properties);
      const association = findAssociationByCity(cityName);

      return {
        id:
          feature.properties?.CD_MUN ||
          feature.properties?.id ||
          `${cityName}-${index}`,
        cityName,
        association,
        path: createPath(feature),
      };
    });
  }, []);

  function showTooltip(event, municipality) {
    const association = municipality.association;

    if (!association || !wrapperRef.current) {
      return;
    }

    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    setHoveredRegion(association.id);

    setTooltip({
      cityName: municipality.cityName,
      association,
      x: event.clientX - wrapperRect.left,
      y: event.clientY - wrapperRect.top,
    });
  }

  function moveTooltip(event) {
    if (!tooltip || !wrapperRef.current) {
      return;
    }

    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    setTooltip((current) => ({
      ...current,
      x: event.clientX - wrapperRect.left,
      y: event.clientY - wrapperRect.top,
    }));
  }

  function hideTooltip() {
    setHoveredRegion(null);
    setTooltip(null);
  }

  return (
    <div className="msAssociationsMap">
      <div
        ref={wrapperRef}
        className="msAssociationsMap__visual"
        onMouseMove={moveTooltip}
        onMouseLeave={hideTooltip}
      >
        <svg
          className="msAssociationsMap__svg"
          viewBox="0 0 520 520"
          role="img"
          aria-label="Mapa das associações dos Embaixadores do Rei em Mato Grosso do Sul"
        >
          {mapData.map((municipality) => {
            const association = municipality.association;

            const isHovered =
              association?.id === hoveredRegion;

            const anotherRegionIsHovered =
              hoveredRegion && association?.id !== hoveredRegion;

            const classNames = [
              "msAssociationsMap__municipality",
              association
                ? `msAssociationsMap__municipality--${association.id}`
                : "msAssociationsMap__municipality--unmapped",
              association?.active
                ? "msAssociationsMap__municipality--active-region"
                : "msAssociationsMap__municipality--inactive-region",
              isHovered
                ? "msAssociationsMap__municipality--hovered"
                : "",
              anotherRegionIsHovered
                ? "msAssociationsMap__municipality--dimmed"
                : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <path
                key={municipality.id}
                d={municipality.path}
                className={classNames}
                tabIndex={association?.active ? 0 : -1}
                aria-label={
                  association
                    ? `${municipality.cityName}, ${association.name}`
                    : municipality.cityName
                }
                onMouseEnter={(event) =>
                  showTooltip(event, municipality)
                }
                onFocus={(event) =>
                  showTooltip(event, municipality)
                }
                onBlur={hideTooltip}
              />
            );
          })}
        </svg>

        {tooltip && (
          <div
            className="msAssociationsMap__tooltip"
            style={{
              left: tooltip.x,
              top: tooltip.y,
            }}
          >
            <span className="msAssociationsMap__tooltipCity">
              {tooltip.cityName}
            </span>

            <strong>{tooltip.association.name}</strong>

            {tooltip.association.active ? (
              <>
                <span className="msAssociationsMap__tooltipStatus">
                  Associação ER ativa
                </span>

                <span className="msAssociationsMap__tooltipCount">
                  {tooltip.association.embassies}{" "}
                  {tooltip.association.embassies === 1
                    ? "embaixada"
                    : "embaixadas"}
                </span>
              </>
            ) : (
              <span className="msAssociationsMap__tooltipInactive">
                Sem associação ER ativa
              </span>
            )}
          </div>
        )}
      </div>

      <div className="msAssociationsMap__legend">
        <div className="msAssociationsMap__summary">
          <strong>{activeAssociations.length}</strong>

          <div>
            <span>associações ativas</span>
            <small>em Mato Grosso do Sul</small>
          </div>
        </div>

        <div className="msAssociationsMap__regions">
          {activeAssociations.map((association) => (
            <button
              key={association.id}
              type="button"
              className={[
                "msAssociationsMap__regionButton",
                `msAssociationsMap__regionButton--${association.id}`,
                hoveredRegion === association.id
                  ? "msAssociationsMap__regionButton--selected"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onMouseEnter={() =>
                setHoveredRegion(association.id)
              }
              onMouseLeave={() => setHoveredRegion(null)}
              onFocus={() =>
                setHoveredRegion(association.id)
              }
              onBlur={() => setHoveredRegion(null)}
            >
              <span className="msAssociationsMap__regionMarker" />

              <div>
                <strong>{association.shortName}</strong>

                <span>
                  {association.embassies}{" "}
                  {association.embassies === 1
                    ? "embaixada"
                    : "embaixadas"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}