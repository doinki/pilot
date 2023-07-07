import type { Meta, StoryObj } from '@storybook/react';

import NoPhotographyOutlined from '../../lib/places/NoPhotographyOutlined';

const meta: Meta<typeof NoPhotographyOutlined> = {
  component: NoPhotographyOutlined,
  tags: ['autodocs'],
  title: 'places/NoPhotographyOutlined',
};

export default meta;
type Story = StoryObj<typeof NoPhotographyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
