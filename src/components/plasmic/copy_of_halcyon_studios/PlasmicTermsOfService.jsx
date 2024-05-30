// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: i6hAdr-YUMOP
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useCurrentUser,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import HalcyonNavBar from "../../HalcyonNavBar"; // plasmic-import: yxQmGgAy9hde/component
import ContainerTermsOfService from "../../ContainerTermsOfService"; // plasmic-import: IiQiNRBehBFl/component
import HalcyonFooter from "../../HalcyonFooter"; // plasmic-import: 7Ks2sCBPZV9k/component
import HalcyonFooterBottom from "../../HalcyonFooterBottom"; // plasmic-import: Mjl6P60oGLT_/component
import { useScreenVariants as useScreenVariants_0QmF6MtAnaU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _0qmF6MTAnaU/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import * as projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import * as sty from "./PlasmicTermsOfService.module.css"; // plasmic-import: i6hAdr-YUMOP/css
import halcyonAngleViewjpgC2Yd88ZgY5Il from "./images/halcyonAngleViewjpg.jpg"; // plasmic-import: C2yd88ZgY5Il/picture
import image89UdRHtzu72Fu from "./images/image8.jpg"; // plasmic-import: 9UdRHtzu72fu/picture

createPlasmicElementProxy;

export const PlasmicTermsOfService__VariantProps = new Array();

export const PlasmicTermsOfService__ArgProps = new Array();

const $$ = {};

export function Head() {
  return <></>;
}

function PlasmicTermsOfService__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $translator = usePlasmicTranslator?.();
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_0QmF6MtAnaU()
  });
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <HalcyonNavBar
            data-plasmic-name={"halcyonNavBar"}
            data-plasmic-override={overrides.halcyonNavBar}
            className={classNames("__wab_instance", sty.halcyonNavBar)}
          />

          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__dEhrz)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__hKg6Y)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ooNgq)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      <Trans__>{"Terms of Service"}</Trans__>
                    </h1>
                    <div
                      data-plasmic-name={"text"}
                      data-plasmic-override={overrides.text}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text
                      )}
                    >
                      <Trans__>
                        {
                          "Below are our Terms of Service, last updated 05/04/24"
                        }
                      </Trans__>
                    </div>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.column__bj22I)}>
                  <PlasmicImg__
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobile")
                        ? "100%"
                        : "100%"
                    }
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={
                      hasVariant(globalVariants, "screen", "mobile")
                        ? "lazy"
                        : "lazy"
                    }
                    src={
                      hasVariant(globalVariants, "screen", "mobile")
                        ? {
                            src: image89UdRHtzu72Fu,
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                        : {
                            src: halcyonAngleViewjpgC2Yd88ZgY5Il,
                            fullWidth: 3840,
                            fullHeight: 2160,
                            aspectRatio: undefined
                          }
                    }
                  />
                </div>
              </Stack__>
            </div>
          </div>
          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <ContainerTermsOfService
              data-plasmic-name={"containerTermsOfService"}
              data-plasmic-override={overrides.containerTermsOfService}
              className={classNames(
                "__wab_instance",
                sty.containerTermsOfService
              )}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wkFV)}>
            <HalcyonFooter
              data-plasmic-name={"halcyonFooter"}
              data-plasmic-override={overrides.halcyonFooter}
              className={classNames("__wab_instance", sty.halcyonFooter)}
            />

            <HalcyonFooterBottom
              data-plasmic-name={"halcyonFooterBottom"}
              data-plasmic-override={overrides.halcyonFooterBottom}
              className={classNames("__wab_instance", sty.halcyonFooterBottom)}
            />
          </div>
        </Stack__>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "halcyonNavBar",
    "pageBanner",
    "columns",
    "h1",
    "text",
    "img",
    "mainSection",
    "containerTermsOfService",
    "halcyonFooter",
    "halcyonFooterBottom"
  ],

  halcyonNavBar: ["halcyonNavBar"],
  pageBanner: ["pageBanner", "columns", "h1", "text", "img"],
  columns: ["columns", "h1", "text", "img"],
  h1: ["h1"],
  text: ["text"],
  img: ["img"],
  mainSection: ["mainSection", "containerTermsOfService"],
  containerTermsOfService: ["containerTermsOfService"],
  halcyonFooter: ["halcyonFooter"],
  halcyonFooterBottom: ["halcyonFooterBottom"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTermsOfService__ArgProps,
          internalVariantPropNames: PlasmicTermsOfService__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTermsOfService__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTermsOfService";
  } else {
    func.displayName = `PlasmicTermsOfService.${nodeName}`;
  }
  return func;
}

export const PlasmicTermsOfService = Object.assign(
  // Top-level PlasmicTermsOfService renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    halcyonNavBar: makeNodeComponent("halcyonNavBar"),
    pageBanner: makeNodeComponent("pageBanner"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    img: makeNodeComponent("img"),
    mainSection: makeNodeComponent("mainSection"),
    containerTermsOfService: makeNodeComponent("containerTermsOfService"),
    halcyonFooter: makeNodeComponent("halcyonFooter"),
    halcyonFooterBottom: makeNodeComponent("halcyonFooterBottom"),
    // Metadata about props expected for PlasmicTermsOfService
    internalVariantProps: PlasmicTermsOfService__VariantProps,
    internalArgProps: PlasmicTermsOfService__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTermsOfService;
/* prettier-ignore-end */
