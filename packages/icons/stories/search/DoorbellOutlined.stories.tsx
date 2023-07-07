import type { Meta, StoryObj } from '@storybook/react';

import DoorbellOutlined from '../../lib/search/DoorbellOutlined';

const meta: Meta<typeof DoorbellOutlined> = {
  component: DoorbellOutlined,
  tags: ['autodocs'],
  title: 'search/DoorbellOutlined',
};

export default meta;
type Story = StoryObj<typeof DoorbellOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
