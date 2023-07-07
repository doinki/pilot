import type { Meta, StoryObj } from '@storybook/react';

import LogoDevOutlined from '../../lib/image/LogoDevOutlined';

const meta: Meta<typeof LogoDevOutlined> = {
  component: LogoDevOutlined,
  tags: ['autodocs'],
  title: 'image/LogoDevOutlined',
};

export default meta;
type Story = StoryObj<typeof LogoDevOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
