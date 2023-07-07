import type { Meta, StoryObj } from '@storybook/react';

import CampaignOutlined from '../../lib/navigation/CampaignOutlined';

const meta: Meta<typeof CampaignOutlined> = {
  component: CampaignOutlined,
  tags: ['autodocs'],
  title: 'navigation/CampaignOutlined',
};

export default meta;
type Story = StoryObj<typeof CampaignOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
