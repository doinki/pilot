import type { Meta, StoryObj } from '@storybook/react';

import PanoramaPhotosphereSelectOutlined from '../../lib/image/PanoramaPhotosphereSelectOutlined';

const meta: Meta<typeof PanoramaPhotosphereSelectOutlined> = {
  component: PanoramaPhotosphereSelectOutlined,
  tags: ['autodocs'],
  title: 'image/PanoramaPhotosphereSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof PanoramaPhotosphereSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
