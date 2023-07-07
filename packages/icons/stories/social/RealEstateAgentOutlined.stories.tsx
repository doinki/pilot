import type { Meta, StoryObj } from '@storybook/react';

import RealEstateAgentOutlined from '../../lib/social/RealEstateAgentOutlined';

const meta: Meta<typeof RealEstateAgentOutlined> = {
  component: RealEstateAgentOutlined,
  tags: ['autodocs'],
  title: 'social/RealEstateAgentOutlined',
};

export default meta;
type Story = StoryObj<typeof RealEstateAgentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
