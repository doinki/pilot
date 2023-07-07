import type { Meta, StoryObj } from '@storybook/react';

import BrowserUpdatedOutlined from '../../lib/hardware/BrowserUpdatedOutlined';

const meta: Meta<typeof BrowserUpdatedOutlined> = {
  component: BrowserUpdatedOutlined,
  tags: ['autodocs'],
  title: 'hardware/BrowserUpdatedOutlined',
};

export default meta;
type Story = StoryObj<typeof BrowserUpdatedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
