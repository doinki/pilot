import type { Meta, StoryObj } from '@storybook/react';

import CastOutlined from '../../lib/hardware/CastOutlined';

const meta: Meta<typeof CastOutlined> = {
  component: CastOutlined,
  tags: ['autodocs'],
  title: 'hardware/CastOutlined',
};

export default meta;
type Story = StoryObj<typeof CastOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
