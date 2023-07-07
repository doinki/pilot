import type { Meta, StoryObj } from '@storybook/react';

import WebOutlined from '../../lib/av/WebOutlined';

const meta: Meta<typeof WebOutlined> = {
  component: WebOutlined,
  tags: ['autodocs'],
  title: 'av/WebOutlined',
};

export default meta;
type Story = StoryObj<typeof WebOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
