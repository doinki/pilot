import type { Meta, StoryObj } from '@storybook/react';

import LocalMoviesOutlined from '../../lib/maps/LocalMoviesOutlined';

const meta: Meta<typeof LocalMoviesOutlined> = {
  component: LocalMoviesOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalMoviesOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalMoviesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
