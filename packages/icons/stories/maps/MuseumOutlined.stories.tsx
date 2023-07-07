import type { Meta, StoryObj } from '@storybook/react';

import MuseumOutlined from '../../lib/maps/MuseumOutlined';

const meta: Meta<typeof MuseumOutlined> = {
  component: MuseumOutlined,
  tags: ['autodocs'],
  title: 'maps/MuseumOutlined',
};

export default meta;
type Story = StoryObj<typeof MuseumOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
