import type { Meta, StoryObj } from '@storybook/react';

import CastleOutlined from '../../lib/maps/CastleOutlined';

const meta: Meta<typeof CastleOutlined> = {
  component: CastleOutlined,
  tags: ['autodocs'],
  title: 'maps/CastleOutlined',
};

export default meta;
type Story = StoryObj<typeof CastleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
