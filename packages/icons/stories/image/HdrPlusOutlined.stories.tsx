import type { Meta, StoryObj } from '@storybook/react';

import HdrPlusOutlined from '../../lib/image/HdrPlusOutlined';

const meta: Meta<typeof HdrPlusOutlined> = {
  component: HdrPlusOutlined,
  tags: ['autodocs'],
  title: 'image/HdrPlusOutlined',
};

export default meta;
type Story = StoryObj<typeof HdrPlusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
