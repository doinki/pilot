import type { Meta, StoryObj } from '@storybook/react';

import HlsOutlined from '../../lib/action/HlsOutlined';

const meta: Meta<typeof HlsOutlined> = {
  component: HlsOutlined,
  tags: ['autodocs'],
  title: 'action/HlsOutlined',
};

export default meta;
type Story = StoryObj<typeof HlsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
