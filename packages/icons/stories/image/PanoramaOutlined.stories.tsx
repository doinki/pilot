import type { Meta, StoryObj } from '@storybook/react';

import PanoramaOutlined from '../../lib/image/PanoramaOutlined';

const meta: Meta<typeof PanoramaOutlined> = {
  component: PanoramaOutlined,
  tags: ['autodocs'],
  title: 'image/PanoramaOutlined',
};

export default meta;
type Story = StoryObj<typeof PanoramaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
