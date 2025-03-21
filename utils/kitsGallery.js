/********************************************************************************* 
 * Copyright (c) 2023, 2024 Contributors to the Eclipse Foundation
 * 
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 * 
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 * 
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import Business_Kit from "@site/static/img/bpkit.png";
import DataChain_Kit from "@site/static/img/datachainkit.png";
import Connector_Kit from "@site/static/img/connectorkit-min.png";
import Traceability_Kit from "@site/static/img/traceabilitykit.png";
import BehaviourTwin_Kit from "@site/static/img/behaviourtwinkit.png";
import DigitalTwin from "@site/static/img/DigitalTwin.png";
import EcoPass from "@site/static/img/EcoPass.png";
import ESS_Kit from "@site/static/img/ESSKit.png";
import OnlineSimulation from "@site/static/img/OnlineSimulation.png";
import Quality from "@site/static/img/Quality.png";
import PCF_Kit from "@site/static/img/PCF_Kit.png";
import ModularProduction_Kit from "@site/static/img/ModularProduction_Kit.png";
import DemandandCapacityManagement_Kit from "@site/static/img/DemandandCapacityManagement_Kit.png";
import Circularity_Kit from "@site/static/img/Circularity_Kit.png";
import Agents_Kit from "@site/static/img/Agents_Kit.png";
import Maas_Kit from "@site/static/img/MaaSKIT.png";
import PURIS_Kit from '@site/static/img/PURISKIT.png';
import Industry_Kit from "@site/static/img/Industry_Kit.png";
import SupplyChainsDisruptionNotifications_Kit from "@site/static/img/SCDN_Kit.png";

// import MoreToCome from "@site/static/img/gallery-more_coming-minified.png";

//************************** IMPORTANT **************************** */

// WHEN DEFINING A "DOMAIN" IN THE kitsGallery ARRAY, MAKE SURE TO SELECT/TYPE EXACTLY AS BELOW:
// * Network & Core Services
// * PLM / Quality
// * Sustainability
// * Resiliency

//**************************************************************** */

export const kitsGallery = [
  {
    id: 1,
    name: 'Business Partner Kit',
    domain: 'Network & Core Services',
    img: Business_Kit,
    pageRoute: "/docs-kits/kits/Business Partner Kit/Adoption View"
  },
  {
    id: 2,
    name: 'Data Chain Kit',
    domain: 'Network & Core Services',
    img: DataChain_Kit,
    pageRoute: "/docs-kits/kits/Data%20Chain%20Kit/Adoption%20View%20Data%20Chain%20Kit"
  },
  {
    id: 3,
    name: 'Connector Kit',
    domain: 'Network & Core Services',
    img: Connector_Kit,
    pageRoute: "/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view"
  },
  {
    id: 4,
    name: 'Traceability Kit',
    domain: 'PLM / Quality',
    img: Traceability_Kit,
    pageRoute: "/docs-kits/kits/Traceability Kit/Business View Traceability Kit"
  },
  {
    id: 5,
    name: 'Behaviour Twin Kit',
    domain: 'PLM / Quality',
    img: BehaviourTwin_Kit,
    pageRoute: "/docs-kits/kits/behaviour-twin-kit/overview"
  },
  {
    id: 6,
    name: 'Digital Twin Kit',
    domain: 'Network & Core Services',
    img: DigitalTwin,
    pageRoute: "/docs-kits/kits/Digital%20Twin%20Kit/Adoption%20View%20Digital%20Twin%20Kit"
  },
  {
    id: 7,
    name: 'Eco Pass Kit',
    domain: 'Sustainability',
    img: EcoPass,
    pageRoute: "/docs-kits/kits/Eco_Pass_KIT/page-adoption-view"
  },
  {
    id: 8,
    name: 'Online Simulation Kit',
    domain: 'Resiliency',
    img: OnlineSimulation,
    pageRoute: "/docs-kits/kits/OSim%20Kit/Adoption%20View%20OSim%20Kit"
  },
  {
    id: 9,
    name: 'Quality Kit',
    domain: 'PLM / Quality',
    img: Quality,
    pageRoute: "/docs-kits/kits/Quality-Kit/Adoption%20View%20Quality%20Kit"
  },
  {
    id: 10,
    name: 'Agents Kit',
    domain: 'Network & Core Services',
    img: Agents_Kit,
    pageRoute: "/docs-kits/kits/knowledge-agents/adoption-view/intro"
  },
  {
    id: 11,
    name: 'Circularity Kit',
    domain: 'Sustainability',
    img: Circularity_Kit,
    pageRoute: "/docs-kits/kits/Circularity_KIT/page-adoption-view"
  },
  {
    id: 12,
    name: 'DCM Kit',
    domain: 'Resiliency',
    img: DemandandCapacityManagement_Kit,
    pageRoute: "/docs-kits/kits/DCM-Kit/adoption-view/overview"
  },
  {
    id: 13,
    name: 'Modular Production Kit',
    domain: 'Resiliency',
    img: ModularProduction_Kit,
    pageRoute: "/docs-kits/kits/Modular%20Production%20Kit/Adoption%20View%20Modular%20Production%20Kit"
  },
  {
    id: 14,
    name: 'PCF Kit',
    domain: 'Sustainability',
    img: PCF_Kit,
    pageRoute: "/docs-kits/kits/PCF%20Exchange%20Kit/Adoption%20View"
  },
  {
    id: 15,
    name: 'Manufacturing as a Service Kit',
    domain: 'Resiliency',
    img: Maas_Kit,
    pageRoute: "/docs-kits/kits/Manufacturing%20as%20a%20Service%20Kit/Adoption%20View%20MaaS%20Kit"
  },
  {
    id: 16,
    name: 'ESS Kit',
    domain: 'Sustainability',
    img: ESS_Kit,
    pageRoute: "/docs-kits/kits/ESS-Kit/ESS%20Kit%20Adoption%20View"
  },
  {
    id: 17,
    name: "Industry Core Kit",
    domain: 'Network & Core Services',
    img: Industry_Kit,
    pageRoute: "/docs-kits/kits/Industry%20Core%20Kit/Business%20View%20Industry%20Core%20Kit"
  },
  {
    id: 18,
    name: 'PURIS Kit',
    domain: 'Resiliency',
    pageRoute: '/docs-kits/kits/PURIS%20Kit/Adoption%20View%20PURIS%20Kit',
    img: PURIS_Kit,
  },
  {
    id: 19,
    name: 'Supply Chain Disruption Notifications KIT',
    domain: 'Resiliency',
    pageRoute: '/docs-kits/next/kits/Supply%20Chain%20Disruption%20Notifications%20KIT/Adoption%20View%20PURIS-DCM%20Supply%20Chain%20Disruption%20Notifications',
    img: SupplyChainsDisruptionNotifications_Kit,
  },
]
