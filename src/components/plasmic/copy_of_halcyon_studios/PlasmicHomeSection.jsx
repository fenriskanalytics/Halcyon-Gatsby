// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: 9rGWqtPg4lLP
import * as React from "react";
import { navigate as __gatsbyNavigate } from "gatsby";
import {
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: EyzplKTGD_DF/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import * as projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import * as sty from "./PlasmicHomeSection.module.css"; // plasmic-import: 9rGWqtPg4lLP/css

createPlasmicElementProxy;

export const PlasmicHomeSection__VariantProps = new Array("blurVariant");

export const PlasmicHomeSection__ArgProps = new Array();

const $$ = {};

function PlasmicHomeSection__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "blurVariant",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.blurVariant
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootblurVariant_unnamedVariant]: hasVariant(
            $state,
            "blurVariant",
            "unnamedVariant"
          )
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__agiL, {
          [sty.freeBoxblurVariant_unnamedVariant__agiLClSsh]: hasVariant(
            $state,
            "blurVariant",
            "unnamedVariant"
          )
        })}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__pYU)}
        >
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__hqMo8
            )}
          >
            <Trans__>{"Halcyon Studios"}</Trans__>
          </h1>
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__jVRgb
            )}
          >
            <Trans__>{"Where Tranquility Meets Exclusivity"}</Trans__>
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
            <Trans__>{"Register for Our Grand Opening"}</Trans__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__duvf)}>
            <Button
              data-plasmic-name={"registrationLinkButton"}
              data-plasmic-override={overrides.registrationLinkButton}
              className={classNames(
                "__wab_instance",
                sty.registrationLinkButton
              )}
              color={"green"}
              onClick={async event => {
                const $steps = {};
                $steps["goToNewsletterRegistration"] = true
                  ? (() => {
                      const actionArgs = { destination: `/Announcements` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __gatsbyNavigate(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToNewsletterRegistration"] != null &&
                  typeof $steps["goToNewsletterRegistration"] === "object" &&
                  typeof $steps["goToNewsletterRegistration"].then ===
                    "function"
                ) {
                  $steps["goToNewsletterRegistration"] = await $steps[
                    "goToNewsletterRegistration"
                  ];
                }
              }}
              size={"compact"}
              submitsForm={true}
            >
              <Trans__>{"Register Now"}</Trans__>
            </Button>
          </div>
        </Stack__>
      </div>
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "registrationLinkButton"],
  text: ["text"],
  registrationLinkButton: ["registrationLinkButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomeSection__ArgProps,
          internalVariantPropNames: PlasmicHomeSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomeSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeSection";
  } else {
    func.displayName = `PlasmicHomeSection.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeSection = Object.assign(
  // Top-level PlasmicHomeSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    registrationLinkButton: makeNodeComponent("registrationLinkButton"),
    // Metadata about props expected for PlasmicHomeSection
    internalVariantProps: PlasmicHomeSection__VariantProps,
    internalArgProps: PlasmicHomeSection__ArgProps
  }
);

export default PlasmicHomeSection;
/* prettier-ignore-end */
