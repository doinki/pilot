import type { Meta, StoryObj } from '@storybook/react';

import OneKPlusOutlined from '../../lib/av/OneKPlusOutlined';

const meta: Meta<typeof OneKPlusOutlined> = {
  component: OneKPlusOutlined,
  tags: ['autodocs'],
  title: 'av/OneKPlusOutlined',
};

export default meta;
type Story = StoryObj<typeof OneKPlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
