import type { FC, SVGProps } from 'react';
import { crmIconMap } from '../../foundations/icons/CrmCatalog';

// Setup group icons come from the CRM icon gallery (Foundations → Icons),
// the same zcicn-* glyphs CRM's own Setup menu uses. Rendered at 18px,
// their native size in CRM, centred in the 24px icon slot.
const gallery = (name: string) => {
  const Icon: FC<SVGProps<SVGSVGElement>> = crmIconMap[name];
  return <Icon width={18} height={18} aria-hidden="true" />;
};

// CRM Setup left menu groups and items.
// Panel styling: Figma Pascal Stone "Setup Left Menu" node 79954:198542.
// Groups and feature lists: CRM Setup Home reference screenshots.
// `isNew: true` shows the yellow "new" sparkle after the item.
export const SETUP_MENU_ITEMS = [
  { id: 'general', label: 'General', icon: gallery('CrmGeneralsetup'), children: [
    { id: 'personal-settings', label: 'Personal Settings' },
    { id: 'users', label: 'Users' },
    { id: 'company-settings', label: 'Company Settings' },
    { id: 'motivator', label: 'Motivator' },
    { id: 'calendar-booking', label: 'Calendar Booking' },
  ] },
  { id: 'security', label: 'Security Control', icon: gallery('CrmSecurityuserTS'), children: [
    { id: 'mail-addon-users', label: 'Zoho Mail Add-on Users' },
    { id: 'territory-management', label: 'Territory Management' },
    { id: 'compliance', label: 'Compliance Settings' },
    { id: 'trusted-domain', label: 'Trusted Domain' },
    { id: 'profiles', label: 'Profiles' },
    { id: 'support-access', label: 'Support Access' },
    { id: 'roles', label: 'Roles and Sharing' },
    { id: 'audit-log', label: 'Audit Log' },
    { id: 'saml', label: 'Single Sign-On(SAML)' },
    { id: 'security-policies', label: 'Security Policies' },
    { id: 'active-directory-sync', label: 'Active Directory Sync' },
    { id: 'login-history', label: 'Login History' },
  ] },
  { id: 'channels', label: 'Channels', icon: gallery('CrmChannels'), children: [
    { id: 'email', label: 'Email' },
    { id: 'business-messaging', label: 'Business Messaging' },
    { id: 'notification-sms', label: 'Notification SMS' },
    { id: 'webforms', label: 'Webforms' },
    { id: 'chat', label: 'Chat' },
    { id: 'channel-portals', label: 'Portals' },
  ] },
  { id: 'customization', label: 'Customization', icon: gallery('CrmCustomsettings'), children: [
    { id: 'modules-fields', label: 'Modules and Fields' },
    { id: 'pages', label: 'Pages', isNew: true },
    { id: 'pipelines', label: 'Pipelines' },
    { id: 'wizards', label: 'Wizards' },
    { id: 'kiosk-studio', label: 'Kiosk Studio' },
    { id: 'canvas', label: 'Canvas', isNew: true },
    { id: 'customize-home', label: 'Customize Home page' },
    { id: 'translations', label: 'Translations' },
    { id: 'templates', label: 'Templates' },
    { id: 'teamspace', label: 'Teamspace', isNew: true },
  ] },
  { id: 'automation', label: 'Automation', icon: gallery('CrmAutomationsetup'), children: [
    { id: 'workflow', label: 'Workflow Rules' },
    { id: 'actions', label: 'Actions' },
    { id: 'schedules', label: 'Schedules' },
    { id: 'assignment', label: 'Assignment' },
    { id: 'escalation', label: 'Case Escalation Rules' },
    { id: 'scoring', label: 'Scoring Rules' },
    { id: 'cadences', label: 'Cadences' },
  ] },
  { id: 'process', label: 'Process Management', icon: gallery('CrmProcessmanagement'), children: [
    { id: 'blueprint', label: 'Blueprint 1.0' },
    { id: 'approval', label: 'Approval Processes' },
    { id: 'review', label: 'Review Processes' },
    { id: 'connected-workflow', label: 'Connected Workflow', isNew: true },
  ] },
  { id: 'experience', label: 'Experience Center', icon: gallery('CrmExperiencecenter'), children: [
    { id: 'signals', label: 'Signals' },
    { id: 'command-center', label: 'CommandCenter' },
    { id: 'segmentation', label: 'Segmentation' },
  ] },
  { id: 'data-admin', label: 'Data Administration', icon: gallery('CrmDataadministrations'), children: [
    { id: 'import', label: 'Import' },
    { id: 'export', label: 'Export' },
    { id: 'data-backup', label: 'Data Backup', isNew: true },
    { id: 'storage', label: 'Storage' },
    { id: 'recycle-bin', label: 'Recycle Bin' },
    { id: 'admin-tools', label: 'Admin Tools' },
    { id: 'sandbox', label: 'Sandbox' },
    { id: 'copy-customization', label: 'Copy Customization' },
  ] },
  { id: 'developer', label: 'Developer Hub', icon: gallery('CrmDeveloperhub'), children: [
    { id: 'mcp', label: 'MCP for AI Agents', isNew: true },
    { id: 'connections', label: 'Connections' },
    { id: 'functions', label: 'Functions' },
    { id: 'widgets', label: 'Widgets' },
    { id: 'client-script', label: 'Client Script' },
    { id: 'slyte-ui', label: 'SlyteUI', isNew: true },
    { id: 'queries', label: 'Queries' },
    { id: 'apis-sdks', label: 'APIs and SDKs' },
    { id: 'crm-variables', label: 'Zoho CRM Variables' },
    { id: 'circuits', label: 'Circuits' },
    { id: 'catalyst', label: 'Catalyst Solutions' },
    { id: 'data-model', label: 'Data Model' },
  ] },
  { id: 'marketplace', label: 'Marketplace', icon: gallery('CrmMarketplace'), children: [
    { id: 'market-all', label: 'All' },
    { id: 'market-zoho', label: 'Zoho' },
    { id: 'market-google', label: 'Google' },
    { id: 'market-microsoft', label: 'Microsoft' },
    { id: 'market-third-party', label: 'Third Party Library' },
    { id: 'market-facebook', label: 'Facebook' },
    { id: 'market-portals', label: 'Portals' },
    { id: 'market-linkedin', label: 'LinkedIn' },
    { id: 'market-quickbooks', label: 'QuickBooks' },
  ] },
  { id: 'zia', label: 'Zia', icon: gallery('CrmZiatopbarmd'), children: [
    { id: 'zia-agents', label: 'Agents', isNew: true },
    { id: 'ai-models', label: 'AI Models' },
    { id: 'data-enrichment', label: 'Data Enrichment' },
    { id: 'prediction', label: 'Prediction' },
    { id: 'recommendation', label: 'Recommendation' },
    { id: 'communication', label: 'Communication' },
    { id: 'vision', label: 'Vision' },
    { id: 'zia-notifications', label: 'Notifications' },
    { id: 'competitors', label: 'Competitors' },
    { id: 'voc', label: 'Voice of the Customer', isNew: true },
    { id: 'presentation', label: 'Presentation' },
    { id: 'custom-ai-studio', label: 'Custom AI Studio' },
    { id: 'usage-data', label: 'Usage Data' },
  ] },
  { id: 'cpq', label: 'CPQ', icon: gallery('CrmCpq'), children: [
    { id: 'product-configurator', label: 'Product configurator' },
    { id: 'guided-selling', label: 'Guided Selling' },
    { id: 'price-rules', label: 'Price rules' },
  ] },
  { id: 'bfsi', label: 'BFSI Setup', icon: gallery('CrmVerticalBanking'), children: [
    { id: 'branch-management', label: 'Branch Management' },
    { id: 'untitled-menu', label: 'Untitled Menu' },
  ] },
  { id: 'incentives', label: 'Incentives', icon: gallery('CrmCommissionAS'), children: [
    { id: 'commission-plans', label: 'Commission Plans' },
  ] },
];
