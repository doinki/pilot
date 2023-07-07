import type { Meta, StoryObj } from '@storybook/react';

import TempleHinduOutlined from '../../lib/maps/TempleHinduOutlined';

const meta: Meta<typeof TempleHinduOutlined> = {
  component: TempleHinduOutlined,
  tags: ['autodocs'],
  title: 'maps/TempleHinduOutlined',
};

export default meta;
type Story = StoryObj<typeof TempleHinduOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
