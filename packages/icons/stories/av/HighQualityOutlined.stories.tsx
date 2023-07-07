import type { Meta, StoryObj } from '@storybook/react';

import HighQualityOutlined from '../../lib/av/HighQualityOutlined';

const meta: Meta<typeof HighQualityOutlined> = {
  component: HighQualityOutlined,
  tags: ['autodocs'],
  title: 'av/HighQualityOutlined',
};

export default meta;
type Story = StoryObj<typeof HighQualityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
