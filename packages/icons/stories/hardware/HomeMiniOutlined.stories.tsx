import type { Meta, StoryObj } from '@storybook/react';

import HomeMiniOutlined from '../../lib/hardware/HomeMiniOutlined';

const meta: Meta<typeof HomeMiniOutlined> = {
  component: HomeMiniOutlined,
  tags: ['autodocs'],
  title: 'hardware/HomeMiniOutlined',
};

export default meta;
type Story = StoryObj<typeof HomeMiniOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
