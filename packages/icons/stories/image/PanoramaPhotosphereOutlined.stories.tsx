import type { Meta, StoryObj } from '@storybook/react';

import PanoramaPhotosphereOutlined from '../../lib/image/PanoramaPhotosphereOutlined';

const meta: Meta<typeof PanoramaPhotosphereOutlined> = {
  component: PanoramaPhotosphereOutlined,
  tags: ['autodocs'],
  title: 'image/PanoramaPhotosphereOutlined',
};

export default meta;
type Story = StoryObj<typeof PanoramaPhotosphereOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
