import type { Meta, StoryObj } from '@storybook/react';

import WbShadeOutlined from '../../lib/image/WbShadeOutlined';

const meta: Meta<typeof WbShadeOutlined> = {
  component: WbShadeOutlined,
  tags: ['autodocs'],
  title: 'image/WbShadeOutlined',
};

export default meta;
type Story = StoryObj<typeof WbShadeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
