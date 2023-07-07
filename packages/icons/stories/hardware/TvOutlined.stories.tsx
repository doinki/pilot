import type { Meta, StoryObj } from '@storybook/react';

import TvOutlined from '../../lib/hardware/TvOutlined';

const meta: Meta<typeof TvOutlined> = {
  component: TvOutlined,
  tags: ['autodocs'],
  title: 'hardware/TvOutlined',
};

export default meta;
type Story = StoryObj<typeof TvOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
