import type { Meta, StoryObj } from '@storybook/react';

import OneKOutlined from '../../lib/av/OneKOutlined';

const meta: Meta<typeof OneKOutlined> = {
  component: OneKOutlined,
  tags: ['autodocs'],
  title: 'av/OneKOutlined',
};

export default meta;
type Story = StoryObj<typeof OneKOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
