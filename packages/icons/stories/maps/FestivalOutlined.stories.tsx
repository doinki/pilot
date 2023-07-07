import type { Meta, StoryObj } from '@storybook/react';

import FestivalOutlined from '../../lib/maps/FestivalOutlined';

const meta: Meta<typeof FestivalOutlined> = {
  component: FestivalOutlined,
  tags: ['autodocs'],
  title: 'maps/FestivalOutlined',
};

export default meta;
type Story = StoryObj<typeof FestivalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
