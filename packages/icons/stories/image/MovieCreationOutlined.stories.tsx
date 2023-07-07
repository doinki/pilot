import type { Meta, StoryObj } from '@storybook/react';

import MovieCreationOutlined from '../../lib/image/MovieCreationOutlined';

const meta: Meta<typeof MovieCreationOutlined> = {
  component: MovieCreationOutlined,
  tags: ['autodocs'],
  title: 'image/MovieCreationOutlined',
};

export default meta;
type Story = StoryObj<typeof MovieCreationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
