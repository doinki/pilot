import type { Meta, StoryObj } from '@storybook/react';

import PanoramaHorizontalOutlined from '../../lib/image/PanoramaHorizontalOutlined';

const meta: Meta<typeof PanoramaHorizontalOutlined> = {
  component: PanoramaHorizontalOutlined,
  tags: ['autodocs'],
  title: 'image/PanoramaHorizontalOutlined',
};

export default meta;
type Story = StoryObj<typeof PanoramaHorizontalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
