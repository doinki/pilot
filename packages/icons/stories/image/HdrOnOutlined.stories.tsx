import type { Meta, StoryObj } from '@storybook/react';

import HdrOnOutlined from '../../lib/image/HdrOnOutlined';

const meta: Meta<typeof HdrOnOutlined> = {
  component: HdrOnOutlined,
  tags: ['autodocs'],
  title: 'image/HdrOnOutlined',
};

export default meta;
type Story = StoryObj<typeof HdrOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
