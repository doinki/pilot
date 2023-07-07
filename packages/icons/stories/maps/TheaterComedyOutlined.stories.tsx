import type { Meta, StoryObj } from '@storybook/react';

import TheaterComedyOutlined from '../../lib/maps/TheaterComedyOutlined';

const meta: Meta<typeof TheaterComedyOutlined> = {
  component: TheaterComedyOutlined,
  tags: ['autodocs'],
  title: 'maps/TheaterComedyOutlined',
};

export default meta;
type Story = StoryObj<typeof TheaterComedyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
