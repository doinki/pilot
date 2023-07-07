import type { Meta, StoryObj } from '@storybook/react';

import SevenKPlusOutlined from '../../lib/av/SevenKPlusOutlined';

const meta: Meta<typeof SevenKPlusOutlined> = {
  component: SevenKPlusOutlined,
  tags: ['autodocs'],
  title: 'av/SevenKPlusOutlined',
};

export default meta;
type Story = StoryObj<typeof SevenKPlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
